import React, { Component } from 'react'
import { TouchableHighlight, View, Text, TextInput, StyleSheet,Button,ScrollView } from 'react-native'

import { graphql } from 'react-apollo';
/*import gql from 'graphql-tag'*/

import { Query } from "react-apollo";
import { gql } from "apollo-boost";

export default class RNApp extends Component {
  constructor() {
    super()
    this.state = { issues: [] };

  }
  componentDidMount() {
    this.loadData();
  }
  async loadData() {
    const query = `query {
      issueList {
        id name phone timestamp
      }
    }`}


  render() {
    const ExchangeRates = () => (
    <Query
      query={gql`
      query {issueList{id name phone timestamp}}
      `}
    >
      {
        ({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :</Text>;
      
          return data.issueList.map(({ id ,name ,phone ,timestamp }) => (
            <Text key={id} style={styles.baseText}>
              {name}, {id},{phone},{timestamp}
            </Text>
          ) );
        }
      }
    </Query>
  )
    return(
    <ScrollView keyboardShouldPersistTaps="handled">
    <ExchangeRates />
    <TextInput style={styles.input} />
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
  },baseText: {fontSize:30,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#dddddd',
    height: 100,
    margin: 20,
    marginBottom: 0,
    paddingLeft: 10
  }
})

