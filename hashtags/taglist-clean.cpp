#include <iostream>
#include <fstream>

using namespace std;

// this program cleans tag-list raw
int main(int argc, char *argv[])
{
  cout << "Opening file..." << endl;

  // open file
  ifstream ifs;
  ifs.open("taglist-raw.txt");

  if (!ifs.is_open())
  {
    cout << "Unable to open file!" << endl;
    return;
  }

  // write in array style
  ofstream ofsAS();
  ofstream ofsLS();

  ofsAS.open("taglist-arraystyle.txt");
  ofsLS.open("taglist-linestyle.txt");

  cout << "Reading and writing..." << endl;

  // read in line by line and detect hashtags
  string line;
  bool firstAddition = true;
  while (getline(ifs, line))
  {
    if (line.contains('#'))
    {
      // since this line includes a hashtag, write it to the clean files
      line.erase(remove(line.begin(), line.end(), '$'), line.end());
      if (firstRun))
      {
        ofsAS << line;
        ofsLS << line;
        firstAddition = false;
      }
      else
      {
        ofsAS << ", " << line;
        ofsLS << "\n" << line;
      }
    }
  }

  // finish
  ofsAS.close();
  ofsLS.close();
  cout << "Finished!" << endl;
}
