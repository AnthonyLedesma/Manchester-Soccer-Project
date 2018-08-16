import React from 'react';
import { Link } from 'react-router-dom';


export const Tag = (props) => {
    const template = <div style={{ background: props.bck, fontSize: props.size, color: props.color, display: 'inline-block', fontFamily: 'Righteous', marginBottom: props.marginBot ? props.marginBot : '0px', border: props.border ? props.border : '' }}>
        {props.children}
    </div>

    if (props.link) {
        return (
            <Link to={props.linkto}>
                {template}
            </Link>
        )
    } else {
        return template
    }
}

export const firebaseLooper = (snapshot) => {
    let data = [];
    snapshot.forEach((childSnapshot) => {
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        })
    });
    return data;
}

export const reverseArray = (actualArray) => {
    let reversedArray = [];

    for (let i = actualArray.length - 1; i >= 0; i--) {
        reversedArray.push(actualArray[i])
    }
    return reversedArray;
}


export const validate = (element) => {
    let error = [true, ''];

    if (element.validation.email) {
        // eslint-disable-next-line
        const regularExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const valid = regularExp.test(element.value);
        const message = `${!valid ? 'This must be a valid email address' : ''}`;
        error = !valid ? [valid, message] : error;
    }

    if (element.validation.required) {
        const valid = element.value.trim() !== '';
        const message = `${!valid ? 'This field is required' : ''}`;
        error = !valid ? [valid, message] : error
    }
    return error;
}