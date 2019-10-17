// 将math 相关的代码，替换为math的模块声明
pub mod math;
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

// 公有模块
pub mod outermost {
    pub fn middle_function() {}

    // 无法访问，私有
    pub fn middle_secret_function() {
        inside::inner_function();
    }

    // 私有模块-仅父、子模块可访问
    pub mod inside {
        // 声明父模块方法
        use super::middle_function;
        pub fn inner_function() {
            secret_function();
            middle_function()
        }

        // 仅模块内部可访问
        pub fn secret_function() {}
    }
}