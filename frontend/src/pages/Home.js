import Card from '../components/Card';
import '../style/Home.css'

function Home() {

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"]

        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        let day = days[d.getDay()]
        let date = d.getDate()
        let month = months[d.getMonth()]
        let year = d.getFullYear()

        return `${day}, ${date} ${month} ${year}`
    }

    let date = new Date()

    return (
        <div className="home-container">
            <h1 className="home-headline">Top 10 of the day</h1>
            <div className="cards">
                <Card headline="Communistic rabbit" authorName="Yerassyl" filterName="communism" date={dateBuilder(date)} img="https://i.kym-cdn.com/entries/icons/original/000/034/467/Communist_Bugs_Bunny_Banner.jpg" />
                <Card headline="USA rabbit" authorName="Yerassyl" filterName="USA" date={dateBuilder(date)} img="https://img.ifunny.co/images/603eb75f6c1f85eea144f1aff06ad8e1b88a3da9719cdd078bedb09c9ae1cbee_1.jpg" />
                <Card headline="JoJo smile" authorName="Yerassyl" filterName="JoJo smile" date={dateBuilder(date)} img="https://cdn.discordapp.com/attachments/744883397868126340/908953335296569354/jojosmile.gif" />
                <Card headline="-1000 social credit" authorName="Yerassyl" filterName="Bobb Ross" date={dateBuilder(date)} img="https://cdn.discordapp.com/attachments/744883397868126340/908960502128971836/bobross.gif" />
                <Card headline="Brutal..." authorName="Gordon" filterName="top10brutal" date={dateBuilder(date)} img="https://cdn.discordapp.com/attachments/744883397868126340/909012577445617714/top10brutal.gif" />
            </div>
        </div>
    );
}

export default Home;
