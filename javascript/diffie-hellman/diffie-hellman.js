//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {

  constructor(p, g) {
    const isPrime = num => {
      for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
    }
    if (p <= 0 || g <= 0) throw new Error('');
    if (!isPrime(p) || !isPrime(g)) throw new Error('');
    this.p = p;
    this.g = g;
  }

  getPublicKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this.p) throw new Error('');
    return this.g**privateKey % this.p
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return theirPublicKey**myPrivateKey % this.p
  }
}
