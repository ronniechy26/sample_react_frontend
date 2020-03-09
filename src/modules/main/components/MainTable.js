import React, { Component, Fragment } from 'react'
import { Table, Button, notification } from 'antd';
import axios from 'axios';
import {connect} from 'react-redux';

import ActionButtons from '../../../shared/components/TableActionButtons';
import  { updateListData } from '../actionCreator';

export class MainTable extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         pagination :{},
         dataSource : [],
         loading : true
      }
    }
    
    componentDidMount(){
      axios.get('http://127.0.0.1:8000/api/account')
        .then((response)=>{
            const pagination = { ...this.state.pagination };
            pagination.size = 10;
            pagination.current = 1;
            pagination.total = response.data.meta.count;
            this.setState({
                pagination,
                loading : true
            });
            this.props.updateListData(response.data.data);
        })
        .catch((err)=>{
            notification.error({
                message : err
            });
        }).finally(()=>{
            this.setState({
                loading : false
            });
        });
    }
    componentDidUpdate(prevProps, prevState){
      if(prevProps.data !== this.props.data){
          this.setState({
              dataSource : this.props.data
          });
      }
    }

    columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          sorter : true
        },
        {
          title: 'Birthday',
          dataIndex: 'birthday',
          key: 'bday',
          sorter : true
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
          sorter : true
        },
        {
          title: 'Position',
          dataIndex: 'position',
          key: 'position',
          sorter : true
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          key: 'gender',
          filterMultiple: false,
          filters : [
            {
              text :'Male', 
              value :1
            },
            {
              text :'Female', 
              value : 2
            }
          ],
          render : (val) => val === 1? 'Male' : 'Female'
        },
        {
          title: '',
          dataIndex: '',
          width: 100,
          key: 'actionButtons',
          render: (val, rowData) => this.render_action_buttons(val,rowData)
        }
      ];

    deleteData = async (rowData) =>{
      this.setState({
        loading : true
      });
     await axios.delete(`http://127.0.0.1:8000/api/account/${rowData.id}`)
          .then((res)=>{
              notification.success({
                message : "Successfully deleted! :)"
              });
              this.setState({
                loading : false
              });
          }).catch((err)=>{
              notification.error({
                message : err
              });
          });
      this.setState({
        loading : true
      });
      await axios.get('http://127.0.0.1:8000/api/account')
        .then((response)=>{
            this.props.updateListData(response.data.data);
            this.setState({
              loading : false
            });
        })
        .catch((err)=>{
            notification.error({
                message : err
            });
        })
    }

    render_action_buttons=(val,rowData)=>{
      return (
        <div>
          <ActionButtons>
              <Button icon="edit" onClick={()=>this.props.edit(val)}/>
              <Button icon="delete"  onClick={()=>this.deleteData(rowData)}/>
          </ActionButtons>
        </div>
      )
    }

    onTableChange=(pagination, filters, sorter)=>{
      const pager = { ...this.state.pagination };
      pager.size = pagination.pageSize;
      pager.current = pagination.current;
      this.setState({
        pagination: pager,
      });
  
      const params = {
        sortDir : sorter.field,
        sort : sorter.order,
        take : pagination.pageSize,
        skip : (pagination.current - 1) * pagination.pageSize
      }
      this.fetch(params)
    }

    fetch=(params={})=>{
      this.setState({
        loading : true
      });
      axios.get(`http://127.0.0.1:8000/api/account`,{params})
        .then((response)=>{
            const pagination = { 
              ...this.state.pagination,
              total : response.data.meta.count
             };
            this.setState({
                pagination,
                dataSource : response.data.data,
                loading : false
            });
        })
        .catch((err)=>{
            notification.error({
                message : err
            });
        }).finally(()=>{
            this.setState({
                loading : false
            });
        });
    }

    render() {
        return (
          <Table 
            rowKey={record => record.id}
            loading={this.state.loading}
            dataSource={this.state.dataSource} 
            columns={this.columns} 
            onChange={this.onTableChange}
            pagination={this.state.pagination}
          />
        )
    }
}
const mapStateToProps = ({information}) => {
  return {
      data : information.data
  }
}

const mapDispatchToProps = {
  updateListData
}
export default connect(mapStateToProps,mapDispatchToProps)(MainTable);
