export default function dummyActionCreator(){
    return (dispatch) => {
        dispatch({
            type: 'DUMMY_ACTION',
            payload: 'Hello, React Developers.'
        });
    }
}