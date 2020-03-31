import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {

  state = {
    users: [
      {
        id: '1',
        login: 'Violet-Bora-Lee',
        avatar_url: 'https://avatars3.githubusercontent.com/u/6451384?v=4',
        html_url: 'https://github.com/Violet-Bora-Lee'
      },
      {
        id: '2',
        login: 'Violet-Bora-Lee',
        avatar_url: 'https://avatars3.githubusercontent.com/u/6451384?v=4',
        html_url: 'https://github.com/Violet-Bora-Lee'
      },
      {
        id: '3',
        login: 'Violet-Bora-Lee',
        avatar_url: 'https://avatars3.githubusercontent.com/u/6451384?v=4',
        html_url: 'https://github.com/Violet-Bora-Lee'
      },
      {
        id: '4',
        login: 'Violet-Bora-Lee',
        avatar_url: 'https://avatars3.githubusercontent.com/u/6451384?v=4',
        html_url: 'https://github.com/Violet-Bora-Lee'
      }
    ]
  };


    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users