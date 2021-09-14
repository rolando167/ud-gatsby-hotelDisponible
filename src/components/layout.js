import * as React from "react"
import { Helmet } from "react-helmet";
import { Global, css} from "@emotion/react";

import Header from "./Header";

const Layout = (props) => {
    return (
        <React.Fragment>
            <Global
                styles={css`
                    html{
                        font-size: 62.5%;
                    }
                    body{
                        background-color: #ddd;
                        font-size: 1.6rem;
                        line-height: 1.5;
                    }
                    h1,h2,h3{
                        margin: 0;
                        line-height: 1.5;
                    }
                    h1,h2{
                        font-family: 'Roboto', serif;
                    }
                    h3{
                        font-family: 'PT Sans', sans-serif;
                    }
                    ul{
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                `}
            />
            <Helmet>
                <title>Gatsby Hotel 🏨  </title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
		        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&display=swap" rel="stylesheet" />

            </Helmet>

            <Header />
            {props.children}
        </React.Fragment>
     );
}
 
export default Layout;