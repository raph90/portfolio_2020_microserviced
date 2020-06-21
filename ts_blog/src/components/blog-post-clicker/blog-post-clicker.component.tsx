import React, { ReactElement } from 'react'
import { BlogPostClickerContainer, BlogPickerTitle, BlogPickerLink, BlogPickerDate } from './blog-post-clicker.styles'
import { Link } from 'gatsby'
import { motion } from "framer-motion"
interface Props {
    title: string;
    date: string | Date;
    link: string;
}

function BlogPostClicker({ title, date, link }: Props): ReactElement {
    return (
        <motion.li style={{ listStyleType: "none" }}>
            <BlogPickerLink style={{ boxShadow: 'none' }} to={link}>


                <BlogPostClickerContainer>
                    <BlogPickerTitle>
                        {title}
                    </BlogPickerTitle>
                    <BlogPickerDate>
                        {date}

                    </BlogPickerDate>
                </BlogPostClickerContainer>

            </BlogPickerLink>

        </motion.li>
    )
}

export default BlogPostClicker