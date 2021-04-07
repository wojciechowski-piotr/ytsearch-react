import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { useTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';

import { DataProvider } from './contexts/DataContext';
import VideoDetails from './components/VideoDetails';
import Home from './components/Home';

import './style.css';

const App = () => {
    const muiTheme = useTheme();

    return (
        <SCThemeProvider theme={muiTheme}>
            <DataProvider>
                <Router basename="/projects/ytsearch">
                <Nav />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/:id" component={VideoDetails} />
                    </Switch>
                </Router>
            </DataProvider>
        </SCThemeProvider>
    );
};

export default App;
