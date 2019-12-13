import React from "react";

class TabItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cardHeader: "card-header text-white bg-info",
            cartBody: "card-body d-none"
        }
    }
    clickHandler = () => {

        this.state.cardHeader.indexOf("active") === -1 ? 
            this.setState((state)=>({cardHeader: `${state.cardHeader} active`,
                                        cartBody: state.cartBody.replace("d-none", "")
            })):
            this.setState((state)=>({cardHeader: state.cardHeader.replace("active", ""),
                                        cartBody: `${state.cartBody}d-none`
            }));
    }
    render() {
        return (
            <div className="card">
                <div className={this.state.cardHeader} onClick={this.clickHandler}>
                    {this.props.tab.header}
                </div>
                <div className={this.state.cartBody}>
                    {this.props.tab.content}
                </div>
            </div>
        );
    }
}

export default TabItem;