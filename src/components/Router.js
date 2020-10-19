import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

// Hooks사용
const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <Router>
            <Switch>
                {isLoggedIn ?
                    (<>
                        {/* <>은 Fragment로서 하위 요소들을 묶을 태그가 없을 떄 div나span을 사용하지 않고 묶을 수 있다. */}
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </>) :
                    (<Route exact path="/"> <Auth /> </Route>)
                }
            </Switch>
        </Router>
    )
}
export default AppRouter;
// export default () => <Router>
//     <Switch>

//     </Switch>
// </Router>