import styled from 'styled-components';

export const TableHeader = styled.div`
    display: flex;
    background: ${p => p.theme.colors.white};
    overflow: hidden;
    height: ${p => p.height}px;
    width: ${p => p.width}px;
`;

export const HeaderCell = styled.div`
    display: flex;
    align-items: center;
    font-size: ${p => p.theme.text.size.small};
    font-weight: bold;
    width: ${p => p.width};
    height: ${p => p.height}px;
    box-sizing: border-box;
    padding: ${p => p.theme.padding.cell};
`;

export const HeaderCellValue = styled.div`
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;
