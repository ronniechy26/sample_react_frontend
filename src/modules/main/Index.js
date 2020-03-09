import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Landing from './MainLanding';
import AddEditView from './components/AddEditView';

class MenuRouter extends Component {
    render() {
              
        
        return(
            <div className="inherit-height">
                <BrowserRouter>
                    <Switch >
                        <Route path="/index" component={Landing} />
                    </Switch>
                    <Route path="/index/new" component={AddEditView} />
                    <Route path="/index/edit/:id" component={AddEditView} />
                </BrowserRouter>
            </div>
        )
    }
}

export default MenuRouter;