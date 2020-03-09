import React, { Component,Fragment } from 'react';
import { Row, Col, Input,Radio, Form, DatePicker} from 'antd';
import moment from 'moment';
import {radioColor} from '../../../styles/components/RadioGroup';

const Item = Form.Item;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

class AddEditFrom extends Component {

  componentDidMount(){
    if(!this.props.location.editData && this.props.toggleCode === 1){
        this.props.history.push({
            pathname: `/index/`
        })
    }
  }  

  render() {

    const { getFieldDecorator } = this.props.form;
    const { editData } = this.props;

    return (
      <Fragment> 
          <Form>
            <Row>
                <Col span={12}>
                    <Item label="Name">
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Name required'}], 
                            initialValue: editData.name
                        })(
                            <Input />
                        )}
                    </Item>
                </Col>  
            </Row>
            <Row>
                <Col span={12}>
                    <Item label="Birthday">
                        {getFieldDecorator('birthday', {
                            rules: [{ required: true, message: 'Birthday required'}], 
                            initialValue: editData.birthday ? moment(editData.birthday, "YYYY-MM-DD") : ""
                        })(
                            <DatePicker format={"YYYY-MM-DD"} />
                        )}
                    </Item>
                </Col>  
            </Row>
            <Row>
                <Col span={12}>
                    <Item label="Address">
                        {getFieldDecorator('address', {
                            rules: [{ required: true, message: 'Address required'}], 
                            initialValue: editData.address
                        })(
                            <Input />
                        )}
                    </Item>
                </Col>  
            </Row>
            <Row>
                <Col span={12}>
                    <Item label="Position">
                        {getFieldDecorator('position', {
                            rules: [{ required: true, message: 'Position required'}], 
                            initialValue: editData.position
                        })(
                            <Input />
                        )}
                    </Item>
                </Col>  
            </Row>
            <Row>
                <Col span={12}>
                    <Item label="Gender">
                        {getFieldDecorator('gender', {
                            rules: [{ required: true, message: 'Gender required'}], 
                            initialValue:  editData.gender 
                        })(
                            <div style={{textAlign: 'right'}}>
                                <RadioGroup defaultValue = { editData.gender } css={radioColor} buttonStyle="solid" >
                                    <RadioButton value={1}>Male</RadioButton>
                                    <RadioButton value={2}>Female</RadioButton>
                                </RadioGroup>
                            </div>
                        )}
                    </Item>
                </Col>  
            </Row>
          </Form>
      </Fragment>
    );
  }
}
export default AddEditFrom;