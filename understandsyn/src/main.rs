use understandsyn::create_function;


#[create_function]
println!("Hello from foo");

macro_rules! make_func {
    ($($tt:tt)*) => {
        pub fn baz() {
            $($tt)*
        }
    }
}

make_func! ( println!("Hello from make_func!"); );
    
fn main() {
     let v = foo();
     println!("{v:?}");

     baz();
}

