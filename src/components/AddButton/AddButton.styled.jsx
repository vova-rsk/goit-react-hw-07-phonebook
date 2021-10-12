import styled from '@emotion/styled';

const Container = styled.div`
    button {
        margin-top: 20px;
        padding: 4px;
        max-width: 100px;
        border: 0.2px solid #b7b7b7;
        border-radius: 3px;
        cursor: pointer;
        transition: box-shadow 250ms linear, -webkit-box-shadow 250ms linear,
        -moz-box-shadow 250ms linear;

        &:hover {
        -webkit-box-shadow: 0px 1px 3px 2px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 0px 1px 3px 2px rgba(34, 60, 80, 0.2);
        box-shadow: 0px 1px 3px 2px rgba(34, 60, 80, 0.2);
        }

        &:active {
        color: #fff;
        background-color: #286fe0;
        }
    }
`;    

export default Container;