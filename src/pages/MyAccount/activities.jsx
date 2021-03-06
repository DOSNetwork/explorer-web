import React, { Component } from "react";
import { injectIntl } from 'react-intl'
import { SubTitle } from "../../Layout/page";
import { Table } from "antd";
import dateformat from "dateformat";
import EllipsisWrapper from '../../components/EllispisWrapper'

const { Column } = Table;
const dateFormatRender = (text, record, index) => {
  let value = dateformat(record.timestamp, "h:MM:ss TT yyyy/mm/dd");
  return <span>{value}</span>;
};
const txHashRender = (text) => {
  return (
    <EllipsisWrapper text={text} />
  )
}
class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      dataListSource: [],
      pagination: {
        current: 1,
        pageSize: 10
      },
      loading: false,
      listCount: 100
    };
  }
  componentDidMount() {
    this.search();
  }
  componentWillUnmount() {
    this.unMount = true;
  }
  getSnapshotBeforeUpdate(prevProps) {
    let userLogined = !prevProps.contract.isWalletLogin && this.props.contract.isWalletLogin;
    let isUserLogout = prevProps.contract.isWalletLogin && !this.props.contract.isWalletLogin
    return { userLogined: userLogined, userLogout: isUserLogout };
  }
  componentDidUpdate(prevProps, preState, snapShot) {
    if (snapShot.userLogined) {
      this.search();
    }
    if (snapShot.userLogout) {
      this.setState({
        dataListSource: []
      })
    }
  }
  search = async () => {
    const { isWalletLogin, userAddress, stakingContract, initialBlock } = this.props.contract;
    if (isWalletLogin) {
      this.setState({
        loading: true
      });

      const options1 = {
        filter: { owner: userAddress },
        fromBlock: initialBlock,
        toBlock: "latest"
      };
      const options2 = {
        filter: { from: userAddress },
        fromBlock: initialBlock,
        toBlock: "latest"
      };
      const options3 = {
        filter: { to: userAddress },
        fromBlock: initialBlock,
        toBlock: "latest"
      };

      const eventList1 = await stakingContract.getPastEvents("NewNode", options1);
      const eventList2 = await stakingContract.getPastEvents("Delegate", options2);
      const eventList4 = await stakingContract.getPastEvents("Unbond", options2);
      const eventList3 = await stakingContract.getPastEvents("Withdraw", options3);
      const eventList5 = await stakingContract.getPastEvents("ClaimReward", options3);
      let dataList = [...eventList1, ...eventList2, ...eventList3, ...eventList4, ...eventList5].sort((a, b) => b.blockNumber - a.blockNumber)
      this.setState({
        dataListSource: dataList
      })
      this.renderActiviesSequence(this.state.pagination, dataList)
    }
  };
  handleTableChange = (pagination) => {
    this.renderActiviesSequence(pagination)
  }
  renderActiviesSequence = async ({ current = 1, pageSize = 10 }, dataListSource) => {
    let { web3Client } = this.props.contract
    let currentDataList = []
    let source = this.state.dataListSource || dataListSource
    let promiseArray = []
    let total = source.length
    let startIndex = (current - 1) * pageSize
    let endIndex = total > (current * pageSize) ? current * pageSize : total
    for (let i = startIndex; i < endIndex; i++) {
      promiseArray.push(web3Client.eth.getBlock(source[i].blockNumber))
    }
    const datas = await Promise.all(promiseArray)
    for (let ii = 0; ii < datas.length; ii++) {
      let y = startIndex + ii
      let { number, timestamp } = datas[ii]
      if (source[y].blockNumber === number) {
        source[y].timestamp = timestamp * 1000
        currentDataList.push(source[y])
      }
    }
    if (!this.unMount) {
      this.setState({
        dataList: currentDataList,
        loading: false,
        pagination: {
          total,
          current,
          pageSize
        }
      })
    }
  }
  render() {
    let { formatMessage: f } = this.props.intl;
    return (
      <>
        <SubTitle title={f({ id: 'Table.Column.Activites.AccountActivity' })}></SubTitle>
        <Table
          rowKey={record => record.transactionHash}
          loading={this.state.loading}
          dataSource={this.state.dataList}
          pagination={{ size: 'small', ...this.state.pagination }}
          rowClassName={(row, index) => {
            return index % 2 === 0 ? "row-light" : "row-dark";
          }}
          onChange={this.handleTableChange}
        >
          <Column
            title={f({ id: 'Table.Column.Activites.Time' })}
            render={dateFormatRender}
            sorter={(a, b) => a.timestamp - b.timestamp}
            sortDirections={["ascend", "descend"]}
            dataIndex="timestamp"
            key="timestamp"
          />
          {/* <Column
            title="Time"
            sorter={(a, b) => a.blockNumber - b.blockNumber}
            sortDirections={["ascend", "descend"]}
            dataIndex="blockNumber"
          /> */}
          <Column
            title={f({ id: 'Table.Column.Activites.Action' })}
            dataIndex="event"
          />
          <Column title={f({ id: 'Table.Column.Activites.TxHash' })}
            render={txHashRender}
            dataIndex="transactionHash"
            key="transactionHash" />
        </Table>
      </>
    );
  }
}
export default injectIntl(Activities)
