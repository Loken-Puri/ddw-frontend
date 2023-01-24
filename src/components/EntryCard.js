import React, {useContext} from 'react'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { AuthContext } from '../context/auth.context'
import {Link} from 'react-router-dom'

function EntryCard() {
  const { experiences } = useContext(AuthContext)
  
  const theme = useMantineTheme();
  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

if (!experiences) {
  return (
  <div style={{ width: 340, margin: 'auto' }}>
      <Card className='entry-card' shadow="sm" p="lg">
        <Card.Section >
          <Image src="https://images.unsplash.com/photo-1480057261736-36852db40e50" height={160} alt="default" />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text className='card-title-text' weight={500}>DEFAULT</Text> 
          <Badge color="pink" variant="light">
            ToDo
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
          obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
          nihil, eveniet aliquid culpa officia aut!
        </Text>

        <Button className="card-btn" variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          See More Details!
        </Button>
      </Card>
    </div>
    )
  } 

 return  ( 
  
<>
  {experiences.map((element, index) => {
    return (
      <div key={element._id} style={{ width: 340, margin: 'auto' }}>
      <Card className='entry-card' shadow="sm" p="lg">
        <Card.Section >
          <Image src={element.picture} height={160} alt="shark" />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text className='card-title-text' weight={500}>{element.title}</Text> 
          <Badge color="pink" variant="light">
            ToDo
          </Badge>
        </Group>

        <Text className='text-entry-card'size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        {element.description}
        </Text>

        <Link to={`/details/${element._id}`} state={element}>
          <button className="card-btn"  fullWidth style={{ marginTop: 14 }}>
          See More</button>
        </Link>
      </Card>
    </div>
    )}
    )}
</>
)
} 

export default EntryCard