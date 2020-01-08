use std::fmt::Display;
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

impl SummarizableDefault for WeatherForecast {}

impl Summarizable for NewsArticle {
    fn summary(&self) -> String {
        format!("one statment news: {}, {}", self.headline, self.location)
    }
}

// traits bound example 1
fn lagest<T: PartialOrd + Copy> (list: &[T]) -> T {
    let mut lagest = list[0];
    for &item in list.iter() {
        if lagest < item {
            lagest = item;
        }
    }
    lagest
}

// traits bound struct impl
struct Pair<T> {
    x: T,
    y: T,
}
// traits bound struct impl
impl <T> Pair <T> {
    // add code here
    fn New(x: T, y: T) -> Self {
        Self {
          x,
          y,
        }
    }
}

impl<T: Display + PartialOrd> Pair <T>  {
    fn cmp_display(&self) {
        if self.x >=  self.y {
            println!("The largest member is y = {}", self.x);
        } else {
            println!("The largest member is y = {}", self.y);
        };
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

    let number_list = vec![11,22,33,44,55,66];
    let result = lagest(&number_list);
    println!("{:?}", result);

    let pair = Pair::New(
        22,
        33
    );
    pair.cmp_display();
}
