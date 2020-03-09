import React, { Component } from 'react';
import {Button, Drawer , Form, notification} from 'antd';
import { get } from 'lodash';
import axios from 'axios';
import {connect} from 'react-redux';
import  {updateListData} from '../actionCreator'

import { drawer_fit_content } from '../../../styles/components/Drawer';
import DrawerFooter from '../../../shared/components/DrawerFooter';
import AddEditForm from './AddEditFrom';

class AddEditView extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             toggleCode : 0,
             editData : {},
             loading : false
        }
    }
    
    componentDidMount(){
        const id = get(this.props.match, 'params.id');
        const editData = get(this.props.location, 'editData')
        this.define_settings(id, editData);
    }

    define_settings = (id, editData) => {
        this.setState({
            toggleCode: id ? 1 : 0,
            editData: editData ? editData : {}
        })
    }

    close_drawer=()=>{
        this.props.history.replace({
            pathname: '/index'
        });
    }

    saveRef = (formRef) => {
        this.formRef = formRef;
    }

    submitForm=()=>{
        this.props.form.validateFieldsAndScroll(async (err, values) => {
            const modifiedValues = {
                ...values,
                'birthday': values['birthday'].format('YYYY-MM-DD'),
            }

            if (!err) {
                if(this.state.toggleCode === 0 ){
                    this.setState({
                        loading : true
                    });
                    await axios.post('http://127.0.0.1:8000/api/account/',modifiedValues)
                        .then((response)=>{
                            this.setState({
                                loading : false
                            },()=>{
                                notification.success({
                                    message : "Successfully added! :)"
                                });
                            });
                        }).catch((err)=>{
                            notification.error({
                                message : err
                            });
                        }).finally(()=>{
                            this.setState({
                                loading : false
                            });
                            this.close_drawer();
                        });
                } else {
                    const id = this.props.match.params.id
                    this.setState({
                        loading : true
                    });
                    await axios.put(`http://127.0.0.1:8000/api/account/${id}`,modifiedValues)
                        .then((response)=>{
                            this.setState({
                                loading : false
                            },()=>{
                                notification.success({
                                    message : "Successfully updated! :)"
                                });
                            });
                        }).catch((err)=>{
                            notification.error({
                                message : err
                            });
                        }).finally(()=>{
                            this.setState({
                                loading : false
                            });
                            this.close_drawer();
                    });
                }
            }
            await axios.get('http://127.0.0.1:8000/api/account')
            .then((response)=>{
                this.props.updateListData(response.data.data);
            })
            .catch((err)=>{
                notification.error({
                    message : err
                });
            })
        });
  
    }

    render() {
        const { toggleCode, editData } = this.state;
        const drawerTitle = toggleCode > 0 ? 'Edit 202' : 'Adding 101';

        return (
            <Drawer title={ drawerTitle } 
                destroyOnClose={ true }
                visible={ true }
                onClose={ () => this.close_drawer() }
                css={ drawer_fit_content }
                width={'30%'}>
                <div>
                    <AddEditForm
                        {...this.props}
                        editData={editData}
                        toggleCode={toggleCode}
                        wrappedComponentRef={this.saveRef}/>
                    <DrawerFooter> 
                        <Button loading={this.state.loading} type="primary" onClick={() => this.submitForm()}>Save</Button>
                        <Button loading={this.state.loading} onClick={ () => this.close_drawer() }>Cancel</Button>
                    </DrawerFooter>
                </div>
            </Drawer>
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

export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(AddEditView));