use quote::quote;
use proc_macro::TokenStream;
use proc_macro2::{Ident, Span};

#[proc_macro_attribute]
pub fn create_function(_attr: TokenStream, input: TokenStream) -> TokenStream {
    let input_str = input.to_string();
    let function_name = Ident::new("foo", Span::call_site());

    let output = quote! {
        fn #function_name() {
            #input_str;
        }
    };

    output.into()
}

