// 将math 相关的代码，替换为math的模块声明
mod math;
mod filter;

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }

    mod Two {
        fn it_works() {
            assert_eq!(2 + 3, 5);
        }
    }
}
