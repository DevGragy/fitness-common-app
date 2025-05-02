export const login = async (email: string, password: string) => { 
    const response = await fetch('https://example.com/api/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    
    if (!response.ok) {
        throw new Error('Login failed');
    }
    
    const data = await response.json();
    return data;
 }
export const register = async (userInfo: object) => { 
    const response = await fetch('https://example.com/api/register', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
    });
    
    if (!response.ok) {
        throw new Error('Registration failed');
    }
    
    const data = await response.json();
    return data;
}