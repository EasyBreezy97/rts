import React, { Component } from "react";

interface User {
    name: string;
    age: number;
}
interface UserSearchProps {
    users: User[];
}

interface UserSearchState {
    name: string;
    user: User | undefined;
}

export default class UserSearch extends Component<UserSearchProps> {
    state: UserSearchState = {
        name: "",
        user: undefined,
    };

    onClick = () => {
        const foundUser = this.props.users.find((user) => {
            return user.name === this.state.name;
        });

        console.log(foundUser);
        this.setState({ user: foundUser });
    };

    render() {
        return (
            <div>
                User search{" "}
                <input
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                />
                <button onClick={this.onClick}>Find user</button>
                <div>
                    {this.state.user?.name} {this.state.user?.age}
                </div>
            </div>
        );
    }
}
