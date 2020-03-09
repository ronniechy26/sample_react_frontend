import React, { Component , Fragment} from 'react';
import axios from 'axios';
import { notification , Button } from 'antd';

import MainTable from './components/MainTable';

import TableWrapper from '../../shared/components/TableWrapper';
import LandingHeader  from "../../shared/components/LandingHeader";
import StandardLanding from '../../shared/components/StandardLanding';
import SubHeaderDiv from '../../shared/components/SubHeaderDiv';

class MainLandaing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource : [],
        }
    }
    
    show_drawer = (rowData) => {
        const path = rowData ? `edit/${rowData.id}` : 'new'
        this.props.history.push({
            pathname: `/index/${path}`,
            editData: rowData
        })
    }

    render() {
        return (
            <Fragment>
                <LandingHeader 
                    title="Practice 101 with FE and BE" withDivider={true}>
                </LandingHeader>
                <SubHeaderDiv>
                    <span className="description" >
                        This commercial is brought you bu Nescafe
                    </span>
                    <div className="page-action">
                        <Button
                            type="primary"
                            icon="plus"
                            onClick={()=>this.show_drawer()}>
                            Add
                        </Button>
                    </div>
                </SubHeaderDiv>
                <StandardLanding>
                    <TableWrapper>
                        <MainTable
                            edit={this.show_drawer}
                        />
                    </TableWrapper>
                </StandardLanding>
            </Fragment>
        )
      }
    }


export default MainLandaing;