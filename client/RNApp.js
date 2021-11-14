import React, { Component } from 'react'
import { TouchableHighlight, View, Text, TextInput, StyleSheet,Button,ScrollView } from 'react-native'

import { graphql } from 'react-apollo';
/*import gql from 'graphql-tag'*/

import { Query } from "react-apollo";
import { gql } from "graphql-tag";



const cusQuery = gql`
query {issueList{id name phone timestamp}}
`
 

const ExchangeRates = ({show},{issues}) => (
  <Query 
    query={gql`
    query {issueList{id name phone timestamp}} 
    `}
  >
    {
      ({ loading, error, data,client }) => {
        client.resetStore()
        if (loading) return <Text>Loading...</Text>;
        if (error) return <Text>Error :</Text>;
        if (show == 0) return <Text>Click "DISPLAY CUSTOMERS" to show Waitlist</Text>;
        if (show == 1) {issues=data.issueList;  return data.issueList.map(({ id ,name ,phone ,timestamp }) => (
          <Text key={id} style={styles.title}>
            Name:{name}, Serial No.{id}, Phone:{phone},Timestamp:{timestamp}
          </Text>
          
        ))}
         
      }
    }
  </Query>
)




export default class RNApp extends Component {
  constructor() {
    super()
    

    this.state = { issues: [],show:0};

    this.issueList = []
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.setState({issues: this.issueList})
  }
/*<ShowIssueList issues = {this.state.issues} />*/
handleChange(e) {
  this.setState({show: 1});
  this.setState({show: 0});
}
  render() {

    return(
    <ScrollView keyboardShouldPersistTaps="handled">
      <Text style={styles.baseText}>
      Hotel California International Waitlist System
      </Text>
    <ExchangeRates show={this.state.show} issues={this.issueList} />
    
    <Button onPress={() => {this.setState({ show: 1});}} title="Display Customers" />
    <Button onPress={this.handleChange} title="Hide Customers" />
    </ScrollView>
    ) 
    
    }
    
}





/*    const query = gql`query OhMyPresidentQuery($name: String!) { 
      president(name: $name) {
        name
        term
        party
      }
    }`

    const President = ({ data }) => (
      <View style={{paddingLeft: 20, paddingTop: 20}}>
        <Text>Name: {data.president && data.president.name}</Text>
        <Text>Party: {data.president && data.president.party}</Text>
        <Text>TermName: {data.president && data.president.term}</Text>
      </View>
    )
    
    const ViewWithData = graphql(query, {
      options: { variables: { name: this.state.name } }
    })(President)
    /**********************************************************************************/ 
/*    const mutation = gql`mutation issueDel($name: String!) { 
      issueDel(name: $name)
    }`
    const [mutateFunction, { data1, loading, error }] = useMutation(mutation);



    const DelPresident = ({data}) => (
      <View style={{paddingLeft: 20, paddingTop: 20}}>
        <Text>Name: {data}</Text>
      </View>
    )
    const ViewResultData = graphql(query, {
      options: { variables: { name: this.state.name } }
    })(DelPresident);
      
    */
  
  

/*
    const DelPresident = ({  mutate  }) => (
      <View style={{paddingLeft: 20, paddingTop: 20}}>
        <Text>Delted Name: {mutate.president && mutate.president.name}</Text>
      </View>
    )*/
    
    
/*
    const DelPresident = ({ mutate }) => { 
      let input 
      const handleSubmit = e => { 
        e.preventDefault() 
        mutate({variables: {text: input.value}}) 
      }
      return <form onSubmit={ handleSubmit }> Enter todo here: <input type="text" ref={ el => input = el }/> 
    </form>} */

/*<Button onPress={this.delName}  title="Delete" color="#841584" />*/
/*
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>Find President Info</Text>
        <TextInput
          onChangeText={this.updateName}
          style={styles.input} />
        <ViewWithData />
        
        <TextInput
        placeholder="New channel"
        onChangeText={this.delName}
      />
        <ViewResultData />
      </View>
    )
  }
}

*/

styles = StyleSheet.create({
  container: {
    height: 300,
    /*flex: 1,*/
    justifyContent: 'center',
  },baseText: {
    marginVertical: 8,
    fontSize:20,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#dddddd',
    height: 100,
    margin: 20,
    marginBottom: 0,
    paddingLeft: 10
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    
  },
})

