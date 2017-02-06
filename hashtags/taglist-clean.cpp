#include <iostream>
#include <fstream>
#include <algorithm>

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
    return 0;
  }

  // write in array style
  ofstream ofsAS("taglist-arraystyle.txt");
  ofstream ofsLS("taglist-linestyle.txt");

  cout << "Reading and writing..." << endl;

  // read in line by line and detect hashtags
  string line;
  int i = 1;
  while (getline(ifs, line))
  {
    if (line.find('#') != string::npos)
    {
      // since this line includes a hashtag, write it to the clean files
      line.erase(remove(line.begin(), line.end(), '#'), line.end());

      if (i == 1)
      {
        ofsAS << line;
        ofsLS << line;
      }
      else
      {
        ofsAS << ", " << line;
        ofsLS << "\n" << line;
      }

      // uncomment this line to break up array style file
      //if (i % 10 == 0) { ofsAS << "\n"; }

      ++i;
    }
  }

  // finish
  ifs.close();
  ofsAS.close();
  ofsLS.close();
  cout << "Finished!" << endl;
}
