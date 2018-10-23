import styled from 'styled-components';

export const TableBody = styled.div`
    flex-direction: column;
    display: flex;
    flex: auto;
    outline: none;
    color: ${p => p.theme.colors.lightDark};
`;

export const TableContainer = styled.div`
    flex-direction: column;
    display: flex;
    flex: auto;
    outline: none;
    color: ${p => p.theme.colors.lightDark};
    position: relative;
`;

export const Row = styled.div`
    display: flex;
    background-color: #FFF;
    border-bottom: 1px solid #E8E8E8;
    &:hover {
        background-color: rgba(24, 144, 255, 0.3);
    }
`;

export const GroupRow = styled.div`
    background-color: #FFF;
    display: flex;
    font-weight: bold;
    padding-left: 25px;
    border-bottom: 1px solid ${p => (!p.isOpen ? '#E8E8E8' : '#FFF')};
`;


export const Cell = styled.div`
    display: flex;
    flex: none;
    align-items: center;
    padding: ${p => p.theme.padding.cell};
    overflow: hidden;
    // position: relative;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 100%;
    box-sizing: border-box;
    width: ${p => p.width};
    &:last-child {
        border-right: none;
    }
    ${Row}:hover & {
        //background-color: rgba(24, 144, 255, 0.2);
    }
`;

export const CellValue = styled.div`
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const Option = styled.div`
    border-radius: 2px;
    padding: 0 4px;
    background-color: #E8E8E8;
    margin: 0 7px 0 0;
    height: 19px;
`;
export const listStyle = {
    outline: 'none',
    overflowX: 'hidden',
};
