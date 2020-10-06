import React, { Component } from 'react';



const Button = ({clickAction, lap}) => {
    return (
        <button onClick={ () => clickAction(lap)}> +{lap}  </button>
    )
}
const Display = ({content}) =>{
    return ( 
        <pre> {content}</pre>
    )

}

// class CountManager extends Component{
//     state = {
//         count: 0 
//     }
//     incrementCounter = (lap) => {
//         let  old = this.state.count
//         this.setState({
//             count: old + lap
//         })
//     }   
//     render() {
//         return (
//             <div>
//                 <Button clickAction={this.incrementCounter} lap={1} />
//                 <Button clickAction={this.incrementCounter} lap={5} />
//                 <Button clickAction={this.incrementCounter} lap={2} />
//                 <Display content={this.state.count}  />
//             </div>
//         )
//     }
 
// }
const CountManager = () => {
    const [count, setCount] = React.useState(0);
    const incrementCounter = (lap) => {
        setCount(count + lap)
    }

    return (
        <div>
            <Button clickAction={incrementCounter} lap={1} />
            <Button clickAction={incrementCounter} lap={5} />
            <Button clickAction={incrementCounter} lap={2} />
            <Display content={count}  />
        </div>
    )
} 

export default CountManager;