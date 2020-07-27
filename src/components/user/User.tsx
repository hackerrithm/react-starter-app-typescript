import React, { Component } from 'react';
import Page from './Page';

export default class User extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    async componentDidMount() {
        await fetch("http://localhost:8080/users")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    // const [error, setError]: any = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState([]);

    // const getData = useCallback ( () => { 
    //     fetch("http://localhost:8080/users")
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 setIsLoaded(true);
    //                 setItems(result._embedded.userList);
    //             },
    //             // Note: it's important to handle errors here
    //             // instead of a catch() block so that we don't swallow
    //             // exceptions from actual bugs in components.
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         )

    //   }, [] )

    //   useEffect(() => {
    //     getData()
    //    },[getData]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    // useEffect(() => {
    //     fetch("http://localhost:8080/users")
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 setIsLoaded(true);
    //                 setItems(result._embedded.userList);
    //             },
    //             // Note: it's important to handle errors here
    //             // instead of a catch() block so that we don't swallow
    //             // exceptions from actual bugs in components.
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         )
    // }, [])

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    // } else {
    //     const { filledArray }: any = items;
    //     if (filledArray.length <= 0) {
    //         console.log('can not print')
    //     }
    //     return (
    //         <Page items={filledArray} />
    //     );
    // }
    render() {
        const { error, isLoaded, items }: any = this.state;
        if (error) {
            return <div>Error: {error.message} </div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Page props={items} />
            );
        }
    }
}
