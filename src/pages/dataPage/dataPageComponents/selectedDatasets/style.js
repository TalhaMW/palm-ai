import styled from 'styled-components';

const SelectedData = styled.span`
  display: inline-block;
  border-radius: 5px;
  /* background-color: red; */
  margin-right: 5px;
  margin-bottom: 10px;
  padding: 2px 4px;
  /* border: 1px solid ${({ theme }) => theme.colors.purple}; */
  background-color: ${({ theme }) => theme.colors.white};
  .selected-data-text {
    /* background: oldlace; */
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.purple};
  }
  .delete-data {
    cursor: pointer;
    width: 8px;
    height: 8px;
    /* background-color: red; */

    img {
      width: 8px;
      height: 8px;
    }
  }
`;
export { SelectedData };
