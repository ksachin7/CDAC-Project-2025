import React from 'react'
import '../styles/dashboard.css'
import '../styles/index.css'
import LogoutButton from '../components/LogoutButton.jsx'
import UserProfile from './UserProfile.jsx'
import ProfileIcon from '../components/ProfileIcon.jsx'

function Dashboard() {
    return (
        <div id='dashboard-container'>
            <nav className='dashboard-nav'>
                <h2>Dashboard</h2>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ProfileIcon />
                    <LogoutButton />
                </div>
            </nav>
            <main>
                Dashboard Contents

                <br /><br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eum delectus asperiores magni deleniti laudantium in praesentium fugit minus maiores velit repellendus. Necessitatibus veniam repudiandae quaerat possimus, eius ullam adipisci.
                Quod excepturi assumenda debitis. Sint rerum animi rem natus impedit voluptatum quisquam fugit reiciendis inventore veniam magni provident, officiis, ducimus earum ipsum consequatur. Eos, doloribus. Nostrum molestiae voluptas a ipsa.
                Et laborum soluta nulla itaque voluptates culpa eius repudiandae odit vitae error molestias repellat corporis, reiciendis dicta neque, ipsum molestiae consectetur ea placeat! Laboriosam earum et fugit saepe unde culpa!
                Recusandae fugit velit pariatur nihil odio. Ducimus molestiae deserunt reiciendis quos, magnam reprehenderit illo doloribus tempora. Fugiat doloremque, repudiandae, sequi consequatur rem explicabo hic cupiditate, corporis nihil dolore deserunt accusamus.
                Esse est eos deleniti, animi accusamus autem voluptates iusto sint reiciendis. Est saepe excepturi quis distinctio deleniti! Cumque perferendis culpa itaque quos, neque cupiditate, accusantium totam delectus consectetur, quo beatae.
                Corporis asperiores soluta adipisci facilis placeat amet optio corrupti. Nemo quidem maxime nobis impedit quos facere excepturi tempora atque vel porro veniam exercitationem nihil odio optio, voluptate voluptatum. Reiciendis, labore?
                Modi incidunt fuga itaque sequi iure magnam quod quasi sed quaerat molestiae numquam eaque consequuntur, ex facere similique odio, corrupti suscipit repellat soluta dolores consequatur! Ipsa id rem explicabo ab.
                Repellat maxime alias nesciunt ab temporibus ullam iure soluta quisquam ad quo nihil magni accusantium, dolores consequatur ut doloribus incidunt, illum voluptatibus saepe ipsum distinctio expedita? Ullam quo minus sint!
                Dicta repudiandae iusto aliquam dolor eveniet labore ipsum odit quos perspiciatis consequuntur. Dolorem, facilis tenetur soluta corporis esse, voluptas hic libero ad fugit recusandae architecto optio vitae ut. Enim, voluptate?
                Aperiam fuga qui ut corrupti libero, dolor veritatis repudiandae ab, sed eum dolore, et distinctio maiores sunt repellendus labore dignissimos quae corporis repellat eius voluptatibus incidunt vero sapiente. Optio, fugiat?
            </main>
        </div>
    )
}

export default Dashboard;