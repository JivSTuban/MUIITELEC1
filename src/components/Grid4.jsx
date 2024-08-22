import { Grid, Paper } from '@mui/material'
import Blogcard from './Blogcard'
import babyPhoto1 from '../assets/65377012_2262435720751270_4288586748419637248_n.jpg'
import babyPhoto2 from '../assets/46641764_2121777308150446_2726930789848580096_n.jpg'
import babyPhoto3 from '../assets/13227634_1590424241285758_2662659319258319475_o.jpg'
import babyPhoto4 from '../assets/377320_473815259329461_1546425052_n.jpg'

const Grid4 = () => {
    const Item = ({ children }) => (
        <Paper style={{ padding: '40px', textAlign: 'center' }}>{children}</Paper>
      )
  return (
    <>
        <Grid container rowSpacing={3} sx={{ mt:1 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item>
                <Item>
                    <Blogcard 
                        image={babyPhoto1} 
                        alt={"Jiv's baby picture holding a paper"} 
                        title={"Jiv showing his work"}
                        text={"This is a baby Jiv, caught in the act of curiosity as he holds a piece of paper, showcasing his early interest in the world around him."} 
                    />
                </Item>
            </Grid>
            <Grid item>
                <Item>
                    <Blogcard 
                        image={babyPhoto2} 
                        alt={"Jiv's baby picture praying to God"} 
                        title={"Jiv praying"} 
                        text={"A serene moment captured, where baby Jiv is seen with hands clasped in prayer, he is being taught how to talk with God at a very young age."} 
                    />
                </Item>
            </Grid>
            <Grid item>
                <Item>
                    <Blogcard 
                        image={babyPhoto3} 
                        alt={"Jiv's baby picture playing the guitar"} 
                        title={"Jiv playing Guitar"} 
                        text={"A joyful moment captured, where baby Jiv is seen strumming a guitar, showcasing his early interest in music and creativity at a young age."} 
                    />
                </Item>
            </Grid>
            <Grid item>
                <Item>
                    <Blogcard 
                    image={babyPhoto4} 
                    alt={"Jiv looking at a 3D Earth globe"} 
                    title={"Jiv Exploring the World"} 
                    text={"A curious moment captured, where baby Jiv is fascinated by a 3D Earth globe, exploring the world around him."} 
                    />
                </Item>
            </Grid>
        </Grid>
    </>
  )
}

export default Grid4