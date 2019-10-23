import React from 'react';
import Contact from './Contact';

const list= [
{
	name:'Billy Little',
	avatar: 'https://randomuser.me/api/portraits/men/51.jpg',
	online: false
},
{
	name:'Mattie Smith',
	avatar: 'https://randomuser.me/api/portraits/women/40.jpg',
	online: false
},
{
	name:'Tyler Hopkins',
	avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
	online: true
},
{
	name:'Kelly Gray',
	avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
	online: true
},
{
	name:'Robin Chavez',
	avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
	online: false
}]

function ContactList(){
	return(
		list.map(user => (
			<Contact
			name = {user.name}
			avatar = {user.avatar}
			online = {user.online}
			/>)
			))
};

export default ContactList