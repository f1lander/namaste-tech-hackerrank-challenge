const countPalindromes = (s) => {
    let counter = 0;

    function isPalindrome(st) {
        if (st.length === 0) return false;

        for(let i = 0, j = st.length -1 ; i < j; i++, j--){
            if(st[i] !== st[j])
                return false;
        }
        return true;
    }

    for(let i = 0; i < s.length; i++){
        let offSet = 1;

        while(offSet <= s.length)
        {
            const sub = s.slice(i, offSet);            
            if(isPalindrome(sub)) counter++;
            
            offSet++;
        }
    }

    console.log(`Counter Palindrome for '${s}' : ${counter}`);
}

// Test cases example
countPalindromes("aaa");
countPalindromes("daata");
countPalindromes("hellolle");