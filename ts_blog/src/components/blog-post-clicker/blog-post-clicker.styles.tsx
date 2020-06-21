import styled from 'styled-components'
import { theme } from '../../utils/theme'
import { Link } from 'gatsby'


export const BlogPostClickerContainer = styled.div`
background-color: white;
border-radius: 12px;
padding: 1.5rem;
transition: all .2s;
&:hover {
    box-shadow: 0px 3px 6px rgba(0,0,0,0.2);
}
margin-bottom: 1rem;
display: flex;
align-items: center;
justify-content: space-between;


`
export const BlogPickerLink = styled(Link)`
text-decoration: none;
`
export const BlogPickerTitle = styled.h4`
color: ${theme.colors.lighterBlue};

`

export const BlogPickerDate = styled.h4`
font-weight: 300;
color: ${theme.colors.lighterBlue};
`
