function DNAtoRNA(dna) {
    var rna = dna
   do {rna = rna.replace("T","U");
   }while(rna.includes("T"));
    return rna;
    }

    //The input string can be of arbitrary length - in particular, it may be empty. 
    //All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.