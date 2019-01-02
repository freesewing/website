import React from "react";
import PropTypes from "prop-types";

const Logo = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.embed ? "" : props.size}
      height={props.embed ? "" : props.size}
      viewBox="0 0 48 48"
      className={props.className}
    >
      <path
        fill={props.color}
        stroke="none"
        d="m 0,0.00109521 0,47.99927079 23.950032,0 c -3.712,0 -17.2950321,-1.86393 -17.8060319,-16.313752 C 5.379,31.640781 4.7280312,31.416618 4.3900312,30.835585 l -0.00703,0 c 0,-0.002 0,-0.004 0.003,-0.006 -0.003,-0.002 -0.003,-0.0041 -0.003,-0.0051 l 0.00703,0 c 0.3280012,-0.567075 0.95597,-0.793947 1.6939701,-0.847904 -0.12,-1.379979 -0.5239688,-3.673944 -1.7359689,-3.728943 -1.578,-0.07292 -2.0160313,0.987901 -2.4310311,1.334979 l -0.019969,-0.08541 c 0.7030001,-1.582893 1.5339374,-1.963929 2.5359374,-1.872888 1.4680001,0.131248 2.3260626,2.401963 2.5070624,4.355934 1.2490001,0.08125 2.6109691,0.435826 3.3649689,0.423951 2.24,0 4.699031,-0.001 6.619031,-0.003 -0.031,-0.243955 -0.12802,-0.708948 -0.244031,-1.229982 -0.238,-1.0879 -0.478,-1.809972 -0.789,-2.402963 -0.128,-0.221039 -0.253031,-0.417911 -0.502031,-0.512909 -0.26,-0.06042 -0.558,-0.302912 -0.657,-0.53395 -0.068,-0.147915 -0.140938,-0.752906 -0.123938,-0.994985 0.016,-0.247913 0.119959,-0.528951 0.319969,-0.876029 0.23,-0.396035 0.289969,-0.524992 0.307969,-0.652906 0.025,-0.174998 -0.034,-0.629991 -0.171,-1.337063 -0.107,-0.547909 -0.193,-1.174983 -0.24,-1.761015 -0.017,-0.172914 0.02302,-0.547909 0.07602,-0.766864 0.045,-0.181247 -0.129021,-0.672073 -0.205021,-0.577074 -0.214,0.267912 -0.327938,0.808946 -0.297938,1.394979 0.017,0.312078 0.215,0.932902 0.423,1.69789 0.094,0.339995 0.102979,0.734989 0.01697,0.981027 -0.059,0.168748 -0.307,0.551034 -0.354,0.542909 -0.201,-0.319996 -0.385969,-0.676032 -0.490969,-1.048943 -0.074,-0.264996 -0.212062,-0.951027 -0.344062,-1.671016 -0.555,-3.075953 -1.675,-6.332862 -0.435,-9.367816 0.908,-2.0549688 2.239062,-3.7599848 4.007062,-5.1549628 0.828,-0.667907 1.663969,-1.33498 2.572969,-1.886013 0.493,-2.509962 3.09597,-3.40898999 6.16097,-3.38799099 0.607,0.004 1.229062,0.04583 1.856062,0.114582 2.085003,0.17499699 3.84194,0.50290899 5.67394,-0.09583 0.799,-0.261038 0.748,-0.170831 1.737,-0.87394499906 L 0,0.00109521 Z m 35.22197,0 c -0.06,0.768947 -1.351937,1.79893099 -2.508939,2.08900999 1.136,0.413952 2.265971,0.859987 3.283968,1.523935 1.900001,1.369979 3.465969,2.922893 4.546972,5.025861 1.28,1.8810138 2.17006,1.209982 3.06206,1.4639368 -0.922,0.544991 -1.788,0.411035 -2.547,-0.03542 1.677,4.941925 0.660958,10.478841 3.628969,14.054787 -1.18,-0.348953 -1.812,-1.236023 -2.823,-4.569952 0.05604,1.242065 -0.314959,2.179967 0.247041,3.626945 0.666,1.333938 1.208,2.703022 1.59,4.136 0.177084,0.444993 0.355,0.974985 0.561001,1.681849 0.472,1.637059 1.259958,1.36498 1.840958,1.753099 -0.815,0.181247 -1.416,-0.145831 -1.86,-0.673948 0.534,3.26595 1.062042,6.512964 -1.858959,9.889912 0.257,-1.492894 1.331,-3.515988 0.99,-5.103964 -0.729,3.72736 -5.577008,13.137217 -19.425009,13.137217 l 24.049968,0 0,-47.99927079 -12.77803,0 z m -1.941,11.10687279 c 0.162917,0.323954 0.397021,1.011026 0.478042,1.371021 0.338,1.593934 0.409958,2.673897 0.286958,4.203874 -0.06104,0.783946 -0.256937,1.548934 -0.426937,2.312964 -0.21,0.87707 -0.298021,1.781015 -0.598021,2.633023 -0.285,0.752905 -0.605042,1.494977 -1.150021,2.095926 -0.03104,0 -0.197917,-0.263954 -0.286979,-0.451868 -0.03792,-0.08333 -0.07396,-0.191663 -0.07396,-0.242913 0,-0.04792 0.06687,-0.401035 0.142917,-0.781029 0.152083,-0.737073 0.337021,-1.1029 0.295021,-1.59706 -0.03792,-0.434993 -0.065,-0.541033 -0.231,-1.051859 -0.167083,-0.50895 -0.332,-0.884986 -0.408,-0.927069 0.009,0.158331 0.01094,0.748947 0.03104,1.036026 0.09896,0.502076 0.08292,1.019985 -0.06,2.00997 -0.17,1.182065 -0.165,1.358937 0.03604,1.677057 0.06708,0.102082 0.230021,0.332912 0.361021,0.513951 0.381,0.482909 0.521,1.147066 0.324,1.73789 -0.152917,0.446035 -0.536979,0.77603 -0.970979,0.929986 l -0.225,0.07083 c -0.206042,0.451035 -0.407063,0.903945 -0.578063,1.368938 -0.277,0.788946 -0.536979,1.587059 -0.718958,2.403984 2.169,0.02 3.772967,0.06042 5.356969,0.133332 1.657,0.075 1.891021,9.99e-4 4.561029,0.276037 -2.67,0.274996 -2.904031,0.199997 -4.561029,0.274996 -1.627,0.075 -3.280969,0.116665 -5.548969,0.137498 -0.231,0.687073 -0.437021,1.418103 -0.913042,1.976011 -2.205002,2.085969 -2.878937,2.572962 -5.151937,2.549962 -2.272001,-0.02292 -2.630063,-0.168748 -4.166064,-1.377063 -1.381,-1.093941 -1.653968,-1.489977 -2.017968,-3.131952 -1.938,-0.001 -4.51,-0.0021 -6.762,-0.0021 -0.7450005,-0.012 -2.0729693,0.332079 -3.3079693,0.419994 0.52,11.928819 11.0489373,15.291789 17.1249383,15.291789 8.196,0 16.19203,-5.254879 17.35903,-12.178774 1.326,-7.87588 -3.129031,-8.369873 -4.123029,-12.278813 -0.572,-2.243966 1.416041,-5.672914 -0.217979,-8.030878 0.09104,0.529992 0.227041,1.726848 0.247041,2.046844 0.04,1.366021 -0.515,2.809957 -1.065,4.55393 -0.428,1.356021 -0.238042,3.067975 0.08604,4.428954 -0.188959,-0.367911 -1.138979,-1.137899 -1.207979,-3.344949 -0.05396,-1.87393 1.225,-3.386949 1.266,-6.200906 l 0,-0.02917 0,-0.08542 c 0.019,-2.072051 -1.661063,-4.183936 -3.185061,-4.739928 z m -5.359969,7.536823 c -0.58,0.009 -1.158979,0.09583 -1.705958,0.25208 -0.508,0.16458 -0.755063,0.441035 -0.866063,0.972068 -0.175,1.293939 0.284063,2.621023 1.046063,3.671007 0.908,0.708947 2.052937,0.517909 3.123937,0.319995 0.71,-0.444993 1.035021,-1.0779 1.096021,-1.896013 0.08708,-0.56395 0.09,-0.908944 0.01303,-1.388937 -0.137916,-0.75103 -0.243062,-1.419978 -0.992062,-1.707057 -0.551,-0.158331 -1.129979,-0.229997 -1.714958,-0.223122 z M 19.038,18.740621 c -1.103,0.075 -2.904968,0.212913 -3.397969,1.404979 -0.192,0.74103 0.03798,1.531018 0.145979,2.267965 0.126,0.762905 0.206,1.477061 1.077001,1.732057 1.574,0.013 3.198031,0.075 3.949029,-1.576851 0.516001,-1.261022 0.934959,-2.698021 -0.370029,-3.581008 -0.304,-0.193747 -0.857,-0.251871 -1.404,-0.246871 z m 19.903031,0.206247 c -0.21,0.932902 -0.913,0.774988 -0.261,3.597987 0.341,1.462061 1.256958,2.157967 1.897979,3.380949 -1.088,-2.246966 -1.629979,-3.805984 -1.636958,-6.978936 z m -15.812999,2.297965 c -0.35,0.459993 -0.352041,0.74603 -0.529041,1.118941 -0.356,1.022068 -0.899021,2.001012 -1.069042,3.066995 0.127917,0.557909 0.955,0.688948 1.377,0.334995 0.166042,-0.143748 0.305,-0.281037 0.378,-0.493951 0.283,0.326037 0.487,0.65499 0.969,0.656032 0.661,-0.03125 1.263,-0.439993 0.822,-1.139983 -0.472,-0.967068 -0.542938,-2.073926 -0.906938,-3.079911 -0.085,-0.272079 -0.178958,-0.423952 -0.256041,-0.426035 -0.147917,0.174997 -0.266,0.371036 -0.381,0.567908 -0.148959,-0.191664 -0.231979,-0.431035 -0.403979,-0.604991 z m -6.192001,5.384918 c -0.106,0 -0.08006,0.1 0.165938,0.598949 0.313,0.622074 0.803,1.56206 0.84,1.603934 0.044,0.05 0.073,0.03958 0.111,-0.0375 0.052,-0.108332 0.103021,-0.506034 0.08202,-0.673948 -0.013,-0.141665 -0.2,-0.721031 -0.282,-0.869987 -0.119,-0.223955 -0.703969,-0.621032 -0.916969,-0.621032 z m 12.221999,0.311037 c -0.277,0.114582 -0.63302,0.206247 -0.72102,0.509992 -0.05104,0.24208 -0.04292,0.512076 0.03,0.814988 0.08604,0.354995 0.111041,0.418952 0.166041,0.418952 0.167084,-0.168748 0.280938,-0.369994 0.327938,-0.626032 0.248,-0.849987 0.294,-1.083942 0.228,-1.111025 -0.011,-0.003 -0.02292,-0.006 -0.03104,-0.007 z m -1.467375,1.85268 c -0.0052,-7.91e-4 -0.01041,-7.08e-4 -0.01566,2.92e-4 -0.03104,0.005 -0.06396,0.04792 -0.128958,0.147914 -0.172084,0.26708 -0.247979,0.49291 -0.247979,0.752906 -0.02396,0.124998 0.0019,0.206246 0.102916,0.224163 0.05604,0 0.14,-0.015 0.187084,-0.03542 0.107916,-0.04375 0.123958,-0.08958 0.196875,-0.507076 0.06,-0.324995 0.04708,-0.491034 -0.04292,-0.554158 -0.0195,-0.01575 -0.03562,-0.025 -0.05146,-0.02917 z m -8.648626,0.01923 c -0.087,0 -0.148021,0.08542 -0.148021,0.21208 0,0.135415 0.123042,0.707906 0.175021,0.813946 0.085,0.177081 0.393,0.247913 0.456,0.106249 0.055,-0.112499 -0.043,-0.767905 -0.129,-0.877904 -0.077,-0.104165 -0.285,-0.253954 -0.354,-0.253954 z m 7.823439,0.116665 c -0.0077,0.0017 -0.01525,0.01019 -0.0225,0.02917 -0.06396,0.08333 -0.257,0.481035 -0.3,0.613949 -0.03708,0.129165 -0.07104,0.511034 -0.05104,0.571033 0.017,0.04583 0.108125,0.03958 0.227063,-0.01604 0.05396,-0.025 0.143958,-0.08542 0.196875,-0.133331 l 0.08813,-0.0875 0.01697,-0.307912 c 0.018,-0.337912 -0.004,-0.492076 -0.08812,-0.612074 -0.02025,-0.006 -0.04438,-0.0625 -0.0675,-0.05625 z m -4.953469,0.0375 c -0.04104,0.004 -0.08792,0.03333 -0.135,0.08958 -0.09,0.102082 -0.128958,0.221039 -0.21,0.616866 l -0.05604,0.274996 0.06604,0.09791 c 0.07104,0.108332 0.101042,0.118748 0.364958,0.124998 0.09896,10e-4 0.166042,-0.009 0.183959,-0.02917 0.016,-0.018 0.06896,-0.179164 0.118958,-0.359995 l 0.09396,-0.327078 -0.06708,-0.131248 c -0.09896,-0.147914 -0.178958,-0.311037 -0.36,-0.357078 z m -2.13197,0.01096 c -0.118,0.02917 -0.118021,0.247913 -0.004,0.728947 0.049,0.160414 0.085,0.314995 0.201,0.442077 l 0.217031,0 c 0.167,0 0.220969,-0.008 0.229969,-0.0375 0.01,-0.02083 0.004,-0.191664 -0.009,-0.376036 l -0.02502,-0.33687 -0.148979,-0.149997 c -0.141,-0.120832 -0.267969,-0.259997 -0.460969,-0.271871 z m 6.261001,0.04167 c -0.05708,0.012 -0.133125,0.110415 -0.214041,0.268954 -0.111042,0.219997 -0.161042,0.379994 -0.2,0.636865 -0.03396,0.211039 -0.03,0.22708 0.01294,0.278954 0.131042,0.143748 0.401,0.197914 0.498,0.102082 0.05604,-0.05625 0.07313,-0.145831 0.09104,-0.579991 0.001,-0.267913 0.04813,-0.642907 -0.187917,-0.706031 z m -5.326032,0.02006 c -0.12,0.006 -0.128979,0.09166 -0.115979,0.472909 0.022,0.46791 0.04694,0.608949 0.135938,0.68499 0.06396,0.05625 0.08104,0.06042 0.265041,0.04375 0.106042,-0.01 0.214,-0.02917 0.24,-0.04375 0.04292,-0.223955 0.05208,-0.478118 0.04312,-0.718947 l -0.1,-0.147915 c -0.123958,-0.179164 -0.264,-0.277912 -0.414,-0.289995 -0.02,-0.002 -0.041,-0.003 -0.054,-0.002 z m 2.141907,0.06458 c -0.02479,0.0013 -0.04667,0.01181 -0.06083,0.04375 -0.08896,0.108331 -0.33,0.979985 -0.294,1.0679 0.02792,0.07708 0.314062,0.108332 0.638062,0.06667 0.08708,-0.011 0.162917,-0.03542 0.175,-0.05625 0.035,-0.04792 0.01303,-0.723948 -0.02292,-0.844988 -0.045,-0.141664 -0.146875,-0.22708 -0.307959,-0.261037 -0.03625,0.005 -0.08583,-0.01848 -0.127083,-0.01631 z m 2.225063,0.02292 c -0.05604,0.007 -0.111042,0.05625 -0.158959,0.156247 -0.08104,0.168748 -0.196041,0.556033 -0.211958,0.731031 l -0.01697,0.133331 0.225,0.04167 c 0.04708,0.016 0.08,0.012 0.229959,-0.02708 0.08604,-0.02292 0.167083,-0.05 0.187083,-0.06667 0.02292,-0.02 0.03604,-0.112498 0.03604,-0.328953 0,-0.271037 -0.009,-0.31312 -0.06896,-0.433952 -0.07396,-0.145831 -0.15,-0.212913 -0.221062,-0.206246 z m -0.978,0.003 c -0.06708,0.015 -0.141042,0.014 -0.205,0.04792 -0.05896,0.03125 -0.196042,0.469993 -0.230063,0.748114 -0.04292,0.312079 -0.01597,0.332912 0.337021,0.314995 0.107083,-0.006 0.257042,-0.02917 0.328021,-0.05 0.162917,-0.05 0.162917,-0.04792 0.08708,-0.421035 -0.05708,-0.264996 -0.147083,-0.512909 -0.218062,-0.597074 -0.03,-0.03333 -0.05208,-0.04375 -0.09896,-0.04167 z M 6.110998,30.53899 c -0.488,0.03958 -0.8389688,0.156248 -0.8389688,0.293121 0,0.139581 0.3639375,0.256871 0.8589375,0.294995 -0.004,-0.19583 -0.00394,-0.39291 -0.012938,-0.587907 0,0 -0.00403,-0.001 -0.00703,0 z m 0.8650313,0.01706 c 0.003,0.18333 0.00294,0.367911 0.00694,0.551033 0.398,-0.05 0.666,-0.152081 0.666,-0.274996 0.005,-0.120831 -0.2719375,-0.226038 -0.6729375,-0.276037 z m 18.7696887,0.529575 c -0.0145,5e-4 -0.02667,0.002 -0.04375,0.0035 -0.107084,0.005 -0.168959,0.04375 -0.203125,0.170831 -0.05604,0.232913 0.01406,0.486034 0.133958,0.486034 0.02396,0 0.09292,-0.03958 0.142917,-0.0875 0.107083,-0.09583 0.265041,-0.372911 0.265041,-0.464993 0,-0.07083 -0.03,-0.08333 -0.23802,-0.104165 -0.02604,-0.0025 -0.04271,-0.0029 -0.05729,-0.0024 z m -0.763959,0.08542 c -0.01154,4.2e-5 -0.02313,5e-4 -0.03479,0.0015 -0.157084,0.003 -0.171042,0.05417 -0.171042,0.322079 0,0.224996 0.02708,0.32812 0.08104,0.32812 0.219,-0.143748 0.337,-0.357911 0.363,-0.621032 -0.07875,-0.0105 -0.1575,-0.03125 -0.238229,-0.03125 z m -0.86277,0.09792 c -0.405,0 -0.438938,0.013 -0.438938,0.164581 0.04896,0.256038 0.04,0.628949 0.357938,0.66499 0.08104,-0.006 0.1,-0.02292 0.231,-0.255829 0.152916,-0.26208 0.257062,-0.519992 0.221062,-0.554158 -0.008,-0.011 -0.178125,-0.01998 -0.371062,-0.01998 z m -3.009001,0.02917 c -0.285,0.06875 -0.26,0.114581 -0.03896,0.362911 0.14,0.145831 0.146042,0.147914 0.217021,0.108332 0.04708,-0.02708 0.128958,-0.241872 0.128958,-0.349995 0,-0.08541 -0.08604,-0.118748 -0.307041,-0.122915 z m 0.830167,0.0068 c -0.07833,0.0015 -0.15625,0.0098 -0.230167,0.03542 -0.04292,0.04375 0.08813,0.254996 0.254063,0.412077 0.142917,0.09167 0.175833,0.141664 0.333937,0.05208 0.06708,-0.06042 0.06,-0.141664 -0.03396,-0.323953 -0.04292,-0.0875 -0.08604,-0.166664 -0.09,-0.172914 -0.07646,-5e-4 -0.155625,-0.0058 -0.233896,-0.0043 z m 0.655875,0.0093 0.006,0.122915 c 0.003,0.127082 0.095,0.313954 0.235021,0.534992 0.09792,0.154164 0.286979,0.152081 0.340958,0.02292 0.04708,-0.116665 0.133959,-0.62999 0.106875,-0.653948 -0.007,-0.012 -0.14,-0.01996 -0.294,-0.01996 l -0.394958,-0.007 z"
      />
    </svg>
  );
};

Logo.propTypes = {
  size: PropTypes.number,
  embed: PropTypes.bool
};

Logo.defaultProps = {
  size: 24,
  embed: false,
  color: "#fff"
};

export default Logo;
