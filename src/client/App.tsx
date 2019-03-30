import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './scss/app';
import List from './List';
import Detail from './Detail';

export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);

        this.state = { name: null };
    }

    async componentWillMount() {
        let r = await fetch('/api/hello');
        let name = await r.json();
        this.setState({ name })
    }

    render () {
        return (
            <main className="container">
               <Router>
                  <Switch>
                    <Route exact path="/" component={List} />
                    <Route path="/:name" component={Detail} />
                  </Switch>
               </Router>
                
            </main>
        )
    }
}

interface IAppProps {

}

interface IAppState {
    name: string;
}