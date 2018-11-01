struct Point <T>{
    x: T,
    y: T,
}

impl<T> Point<T> {
    pub fn x(&self)-> &T {
        &self.x
    }
}
// 定义指定类型的 trait
pub trait Summarizable {
    fn summary(&self) -> String;
}

// 定义默认行为
pub trait SummarizableDefault {
    fn summary(&self) -> String {
        format!("default impl")
    }
}

struct NewsArticle {
    pub headline: String,
    pub location: String,
    pub author: String,
    pub content: String
}

struct WeatherForecast {
   hight_temp : f64,
   low_temp: f64,
   chance_of_precipitation:f64
}
impl SummarizableDefault for WeatherForeacast {}

impl Summarizable for NewsArticle {
    fn summary(&self) -> String {
        format!("one statment news: {}, {}", self.headline, self.location)
    }
}


fn main() {
    let integer = Point {
        x: 22.2,
        y: 33.3,
    };
    println!("Hello, world! {:?} {:?}", integer.x(), integer.y);

    let news = NewsArticle {
        headline: String::from("早上的一天"),
        location: String::from("上海长宁区"),
        author: "arthur.wang".to_string(),
        content: "eat breakfast".to_string()
    };
    println!("{}", news.summary());
}
