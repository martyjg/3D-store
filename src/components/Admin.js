// import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import {loadClients} from '../actions';
//
// const mapStateToProps = (state, ownProps) => ({
//     ...ownProps,
//     clients: state.entities.clients
// })
//
// const mapStateToActions = {
//     loadClients
// }
//
// class Admin extends Component  {
//
//     componentWillMount() {
//         this.props.loadClients();
//     }
//
//     render() {
//         const { clients } = this.props
//         return (
//             <div>
//                 <ul>
//                     {clients.allIds.map((id) => {
//                         const client = clients.byId[id];
//                         return (
//                             <li key={id}>{client.displayName}</li>
//                         )
//                     })}
//                 </ul>
//             </div>
//         );
//     }
// }
//
// export default connect(mapStateToProps, mapStateToActions)(Admin);
