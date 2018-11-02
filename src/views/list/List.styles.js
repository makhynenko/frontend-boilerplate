import styled from 'styled-components';
import { Button as _Button, Dropdown as _Dropdown } from 'semantic-ui-react';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: auto;
`;

export const Toolbar = styled.div`
    padding-left: 40px;
    display: flex;
    height: 88px;
    background-color: lightgrey;
    align-items: center;
`;

export const Dropdown = styled(_Dropdown)`
    margin-right: 25px;
    width: 350px;
`;

export const Content = styled.div`
    display: flex;
`;

export const ItemDetailsContainer = styled.div`
    display: flex;
`;
