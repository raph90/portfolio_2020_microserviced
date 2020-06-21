import styled from "styled-components";
import { theme } from "../../utils/theme";
import { motion } from "framer-motion"

export const HeaderContainer = styled(motion.div)`
width: 100%;
height: 10rem;
display: flex;
align-items: center;
justify-content: space-between;
opacity: 0;
`

export const Title = styled.h3`
    color: ${theme.colors.mainBlue};
`