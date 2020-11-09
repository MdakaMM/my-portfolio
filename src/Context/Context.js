import React, {Component} from 'react';

import {Links} from './Data';
import {devSkills} from './Data';
import {otherSkills} from './Data';
import {projects} from './Data';

const ProductContext = React.createContext();

class ProductProvider extends Component{

    state={
        sidebarOpen:false,
        closeLinks:false,
        links:Links,
        headerShow:false,
        devSkills:devSkills,
        otherSkills:otherSkills,
        projects:projects,
        // backMode:false,
        // setClass:JSON.parse(localStorage.getItem("Mode"))
    }

    // open -close sidebar
handleSidebar=()=>{
    console.log('you push handleSidebar');
    this.setState({ 
        sidebarOpen:!this.state.sidebarOpen,
    })
}

// close sidebar if is open 
handleClose=()=>{
    console.log('you closed handleSidebar');
    if(this.state.sidebarOpen===true){
        this.setState({
            sidebarOpen:false
        })
    }
}

componentDidMount(){
    window.addEventListener("scroll", this.scrollEffect)
}

//screll effect
scrollEffect=()=>{
    if(window.scrollY>50){
        this.setState({
            headerShow:true
        })
    }
    else{
        this.setState({
            headerShow:false
        })
    }
}


    render(){
        return(
            <ProductContext.Provider value={{

                ...this.state,
                handleSidebar:this.handleSidebar,
                handleClose:this.handleClose,

            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
}


}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};