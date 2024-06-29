package Java.UmActually;

public class UmActually {
  public static String UmActually(String phrase) {
    String loweredPhrase = phrase.toLowerCase();
    String finalPhrase = "";

    for (int i = 0; i < loweredPhrase.length(); i++) {
        if (Character.isLetter(loweredPhrase.charAt(i))) {
            if (i % 3 == 0) {
                finalPhrase += Character.toUpperCase(loweredPhrase.charAt(i));
            } else {
                finalPhrase += loweredPhrase.charAt(i);
            }
        } else {
            finalPhrase += loweredPhrase.charAt(i);
        }
    }

    return finalPhrase;
}
  public static void main(String[] args) {
    System.out.println(UmActually("Inertia is a property of matter"));
  }
}
