import React, { PureComponent } from 'react'
import AsyncSelect from 'react-select/async';


class Autocom extends PureComponent {
    state = { SelectedUsers : [] }

    onChange = selectedUsers => {
        this.setState({
            selectedUsers: selectedUsers || []
        })
    }

    loadOptions=async(inputText,callback)=>{
        const response = await fetch('http://localhost:3000/API/mockdata?Name_Like=${inputText}');
        const json = await response.json();

        callback(json.map(i=>({label:i.Name,value: i.ID})));
    }
    render ( ) {
        return(

            <AsyncSelect
            value={this.state.selectedUsers}
            onChange={this.onChange}
            placeholder={'กรุณาพิมชื่อ'}
            loadOptions={this.loadOptions}
            />
        )
    }
}
export default Autocom;