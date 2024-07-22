import React from 'react';
import './ClubRanking.css';

function ClubRanking() {
  return (
    <div className="clubs-ranking">
      <table>
        <thead>
          <tr>
            <th>Club</th>
            <th>GP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>P</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Manchester City</td>
            <td>38</td>
            <td>29</td>
            <td>6</td>
            <td>3</td>
            <td>99</td>
            <td>26</td>
            <td>73</td>
            <td>93</td>
          </tr>
          <tr>
            <td>Liverpool</td>
            <td>38</td>
            <td>27</td>
            <td>8</td>
            <td>3</td>
            <td>85</td>
            <td>33</td>
            <td>52</td>
            <td>89</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ClubRanking;
