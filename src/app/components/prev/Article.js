import React from "react";
import {Link, Match} from "react-router";

const Empty = ()=>{
    return(
        <h3>wowwowwowwowoow</h3>
    );
};
const Topic = ({params}) =>{
    return(
        <h3>{params.propsId}</h3>
    );
};

const Articles = ({pathname}) =>{
    return (
        <div>
            <h2>Hey, I am ARTCILES!</h2>
            <ul>
                <li><Link to={`${pathname}/rendering`}>rendering react</Link></li>
                <li><Link to={`${pathname}/components`}>components</Link></li>
                <li><Link to={`${pathname}/props`}>props</Link></li>
            </ul>
            <Match exactly pattern={pathname} component={Empty}/>
            <Match pattern={`${pathname}/:propsId`} component={Topic}/>
        </div>

    );
};


export default Articles;
