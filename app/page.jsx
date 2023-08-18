'Use Client'
import { H1, Parag } from '../components/elements/text/text';
import { Frame, Item, Wall } from '../components/layout/layout';
import { Button } from '../components/elements/button/button';

export default function Home() {
  return (
    <>
    
      <Wall>
        <Frame>
          <Item>
            <H1 text="Brian Ui. Clone the project to use all the style and components for your project."/>
          </Item>
          <Item>
            <Parag text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed at aperiam maxime aliquam eaque itaque amet laboriosam? Cupiditate vero numquam eius deleniti incidunt similique neque officiis, repudiandae, in tempora laborum." />
            <Button text="Button Example"/>
          </Item>
        </Frame>
      </Wall>
    
    </>
  )
}
