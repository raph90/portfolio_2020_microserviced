import styled from "styled-components";
import { theme } from "../../../utils/theme";
import { motion } from "framer-motion"

export const IntroSection = styled.div`
margin-top: 5rem;
`

export const Subtitle = styled(motion.p)`
font-size: 1.8rem;
color: ${theme.colors.lighterBlue};
max-width: 31rem;
opacity: 0;
`

export const SectionsDiv = styled.div`
display: flex;
justify-content: space-between;
margin-top: 5rem;

`

export const Section = styled.div`
width: calc(100% / 2 - 100px);
`
export const SectionTitle = styled.h2`
    color: ${props => props.color};
`